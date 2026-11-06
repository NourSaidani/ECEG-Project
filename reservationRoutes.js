const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const db = require('./db');

// --- CÔTÉ CLIENT : Créer une réservation & générer le billet QR Code ---
router.post('/create', async (req, res) => {
    const { userId, tripId } = req.body;

    const trip = db.trips.find(t => t.id === Number(tripId));
    if (!trip) return res.status(404).json({ message: "Voyage non trouvé" });
    if (trip.availableSeats <= 0) return res.status(400).json({ message: "Voyage complet, plus de places disponibles" });

    // Diminuer le nombre de places disponibles
    trip.availableSeats -= 1;

    // Créer la réservation
    const newReservation = {
        id: db.reservations.length + 1,
        userId: Number(userId),
        tripId: Number(tripId),
        reservationDate: new Date(),
        status: "confirmed"
    };
    db.reservations.push(newReservation);

    // Générer le QR Code pour le billet numérique (BF4)
    const qrPayload = JSON.stringify({
        ticketId: `ECEG-TICK-${newReservation.id}`,
        reservationId: newReservation.id,
        userId: userId
    });

    const qrCodeDataUrl = await QRCode.toDataURL(qrPayload);

    const newTicket = {
        id: db.tickets.length + 1,
        reservationId: newReservation.id,
        qrCode: qrCodeDataUrl,
        status: "valid"
    };
    db.tickets.push(newTicket);

    res.status(201).json({
        message: "Réservation effectuée avec succès !",
        reservation: newReservation,
        ticket: newTicket
    });
});

// --- CÔTÉ CHAUFFEUR : Vérifier et valider un billet via QR Code (BF5) ---
router.post('/validate-ticket', (req, res) => {
    const { reservationId } = req.body;

    const ticket = db.tickets.find(t => t.reservationId === Number(reservationId));
    if (!ticket) return res.status(404).json({ valid: false, message: "Billet inexistant" });

    if (ticket.status === "used") {
        return res.status(400).json({ valid: false, message: "Alerte : Billet déjà utilisé !" });
    }

    if (ticket.status === "valid") {
        ticket.status = "used"; // Marquer le billet comme utilisé
        return res.json({ valid: true, message: "Billet valide ! Embarquement autorisé." });
    }

    res.status(400).json({ valid: false, message: "Billet invalide" });
});

module.exports = router;