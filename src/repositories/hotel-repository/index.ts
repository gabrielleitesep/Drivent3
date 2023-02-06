import { prisma } from "@/config";

async function getHotels() {
  return prisma.hotel.findMany();
}

async function getHotelRooms(hotelId: number) {
  return prisma.hotel.findMany({ where: { id: hotelId }, include: { Rooms: true } } );
}

const hotelRepository = {
  getHotels,
  getHotelRooms
};

export default hotelRepository;
