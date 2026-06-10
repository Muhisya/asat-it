import catasat from "/src/assets/catasat.jpg";

export default function BlobAvatar() {
  return (
    <div className="relative w-40 h-40 mb-8">
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background: "rgb(251,191,36)",
          padding: "3px",
        }}
      />
      <div
        className="absolute inset-[3px] overflow-hidden bg-zinc-900"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      >
        <img
          src={catasat}
          alt="Hoshi Experience profile photo"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
