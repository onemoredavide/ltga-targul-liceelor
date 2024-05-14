type ICTABannerProps = {
  title: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12">
    <div className="text-center text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
    </div>
  </div>
);

export { CTABanner };
