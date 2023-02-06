import { AuthenticatedRequest } from "@/middlewares";
import hotelService from "@/services/hotels-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {

    const { userId } = req;

    try {
        const allHotels = await hotelService.getHotels(userId)
        return res.status(httpStatus.OK).send(allHotels);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function getHotelRooms(req: AuthenticatedRequest, res: Response) {

    const { hotelId } = req.params;
    const { userId } = req;

    try {
        const allHotelRooms = await hotelService.getHotelRooms(userId, Number(hotelId))
        return res.status(httpStatus.OK).send(allHotelRooms);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}