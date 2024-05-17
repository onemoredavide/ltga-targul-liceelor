import { useRouter } from 'next/router';

const Gallery = () => {
  const router = useRouter();

  console.log(router.basePath);

  return (
    <div className="mt-12 flex flex-col gap-y-3 md:grid md:grid-cols-12 md:gap-x-3">
      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica1.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>
      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica2.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>
      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica3.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>

      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica4.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>
      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica5.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>
      <div className="col-span-4">
        <img
          src={`${router.basePath}/assets/images/robotica6.JPG`}
          alt="Robotica"
          className="w-full"
        />
      </div>

      <div className="col-span-4">
        <video width="320" height="240" controls className="size-full">
          <source
            src={`${router.basePath}/assets/images/robotica-vid-1.MOV`}
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="col-span-4">
        <video width="320" height="240" controls className="size-full">
          <source
            src={`${router.basePath}/assets/images/robotica-vid-2.MOV`}
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Gallery;
