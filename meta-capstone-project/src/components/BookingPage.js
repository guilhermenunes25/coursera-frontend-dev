import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday'
    });

    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm 
            formData= {formData}
            availableTimes={availableTimes}
            onInputChange={handleInputChange}
            />
        </div>
    )
}