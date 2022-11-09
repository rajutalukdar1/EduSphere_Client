import React from 'react';

const ReviewCard = ({ view }) => {
    console.log(view)
    const { serviceName, rating, message } = view;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <td>{serviceName}</td>
                            <td className='text-start'>{message}</td>
                            <td>{rating}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ReviewCard;