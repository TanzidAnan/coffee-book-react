
// eslint-disable-next-line react/prop-types
const Heading = ({title,subTitle}) => {
    return (
        <div className="text-center mt-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg  mt-4 font-thin">{subTitle}</p>
        </div>
    );
};

export default Heading;