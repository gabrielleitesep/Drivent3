import { prisma } from "@/config";

async function getHotels() {
    return prisma.hotel.findMany()
}

async function getHotelRooms() {

}


const hotelRepository = {
    getHotels,
    getHotelRooms
  };
  
  export default hotelRepository;