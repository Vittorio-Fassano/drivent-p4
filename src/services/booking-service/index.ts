import { notFoundError } from "@/errors";
import { forbiddenError } from "@/errors/forbiden-error";
import bookingRepository from "@/repositories/booking-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import roomRepository from "@/repositories/room-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function getBookingService(userId: number) {
  const booking = await bookingRepository.findBookingById(userId);
  if (!booking) {
    throw notFoundError();
  }
  return booking;
}

const bookingService = {
  getBookingService,
};

export default bookingService;
