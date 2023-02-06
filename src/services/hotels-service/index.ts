import hotelRepository from "@/repositories/hotel-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/ticket-repository";
import { notFoundError } from "@/errors";
import httpStatus = require("http-status");

async function getHotels(userId: number) {

  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  } else if (ticket.status === "RESERVED" || !ticket.TicketType.includesHotel) {
    return (httpStatus.PAYMENT_REQUIRED)
  }

  const allHotels = await hotelRepository.getHotels();
  return allHotels
}


async function getHotelRooms(userId: number, hotelId: number) {

  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  } else if (ticket.status === "RESERVED" || !ticket.TicketType.includesHotel) {
    return (httpStatus.PAYMENT_REQUIRED)
  }

  const allHotelRooms = await hotelRepository.getHotelRooms(hotelId);
  return allHotelRooms
}

const hotelService = {
  getHotels,
  getHotelRooms
};

export default hotelService;