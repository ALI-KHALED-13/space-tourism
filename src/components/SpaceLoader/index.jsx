import loaderGif from '../../assets/shared/planetLoader.gif';

export const SpaceLoader =()=> {
  return (
    <div
      style={{
        minHeight: "95vh",
        backgroundColor: "#676d89",
        display: "grid",
        placeItems: "center"
      }}
    >
      <img
        src={loaderGif}
        alt="loading..."
        style={{
          width: "100%",
          maxWidth: "500px"
        }}
      />
    </div>
  );
}