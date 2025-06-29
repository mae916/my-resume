type ImageItem = {
  src: string;
  alt: string;
};

export default function ImageGrid({ images }: { images: ImageItem[] }) {
  return (
    <section className="bg-white py-5" id="kakao-clone">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full pt-[100%]">
              {/* 1:2 비율 */}
              <img
                src={img.src}
                alt={img.alt}
                className="rounded absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
