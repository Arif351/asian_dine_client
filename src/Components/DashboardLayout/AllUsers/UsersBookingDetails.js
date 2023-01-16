import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext/AuthProvider';

const UsersBookingDetails = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-2xl font-medium text-orange-700 mb-4'>{user?.displayName}'s Booking Info</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Booking Date</th>
                            <th>Time</th>
                            <th>Guest</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.time}</td>
                                <td>{booking.person}</td>
                                <td>
                                    <button className="btn btn-info btn-xs">Confirm</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersBookingDetails;