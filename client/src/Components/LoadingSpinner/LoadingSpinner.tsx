import { MagnifyingGlass } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div
    className="loading-spinner"
    role="progressBar"
  >
    <MagnifyingGlass
      height={100}
      width={100}
    />
  </div>
);

export default LoadingSpinner;
