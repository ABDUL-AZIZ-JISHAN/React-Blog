
const Error = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '95vh' }}>
            <h2>Oops! <span style={{ color: 'red', fontSize: '50px' }}>404</span></h2>
            <br />
            <div className='emptyList-wrap'>
                <img src='/assets/images/13525-empty.gif' alt='empty' />
            </div>
        </div>
    );
}

export default Error;
