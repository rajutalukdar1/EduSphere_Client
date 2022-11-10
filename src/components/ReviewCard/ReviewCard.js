import React from 'react';

const ReviewCard = ({ view }) => {
    console.log(view)
    const { serviceName, rating, message, _id } = view;
    console.log(_id)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Message ...</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td className='font-bold'>{serviceName}</td>
                            <td className='font-semibold'>{message}</td>
                            <td className='font-extrabold'>{rating}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ReviewCard;