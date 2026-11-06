const database = {
    users: [
        { id: 1, name: "Client Test", email: "client@test.com", role: "client" },
        { id: 2, name: "Chauffeur Test", email: "driver@test.com", role: "driver" }
    ],
    trips: [
        { id: 1, departureCity: "Tunis", arrivalCity: "Sousse", departureDate: "2026-11-10", departureTime: "08:00", price: 15.0, availableSeats: 4 },
        { id: 2, departureCity: "Sfax", arrivalCity: "Tunis", departureDate: "2026-11-10", departureTime: "14:00", price: 22.0, availableSeats: 0 }
    ],
    reservations: [],
    tickets: []
};

module.exports = database;