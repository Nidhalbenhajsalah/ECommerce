import { useLocaton } from 'react-router';

const Success = () => {
    const location = useLocaton();

    console.log(location);
    return (
        <div className="success">
            <h1>Success</h1>
            <p>
                Thank you for your submission. We will be in touch with you shortly.
            </p>
        </div>
    );
};

export default Success;