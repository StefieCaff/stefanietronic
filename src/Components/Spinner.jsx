import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
            margin: 'auto',
        padding: '25px 0',
        maxHeight: '50vh',
        backgroundColor: '#85b9dd',
        maxWidth: '20%',
        borderRadius: '10px',
        overflow: 'hidden', // Ensure the spinner doesn't overflow if it's larger than the container
      }}>
        <InfinitySpin
            visible={true}
            width="200"
            color="#fff"
            ariaLabel="infinity-spin-loading"
        /></div>
    )
};

export default Spinner;