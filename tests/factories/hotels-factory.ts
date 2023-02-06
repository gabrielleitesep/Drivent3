import { prisma } from "@/config";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: "Hotel Top",
      image: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
    },
  });
}

export async function createHotelTicket() {
  return prisma.ticketType.create({
    data: {
      name: "Hotel Top",
      price: 200,
      isRemote: false,
      includesHotel: true
    },
  });
}

export async function createRemoteTicket() {
  return prisma.ticketType.create({
    data: {
      name: "Lar Doce Lar",
      price: 0,
      isRemote: true,
      includesHotel: false
    },
  });
}

export async function createRooms(hotelId: number) {
  return prisma.room.create({
    data: {
      name: "Quarto básico",
      capacity: 1,
      hotelId,
    },
  });
}
