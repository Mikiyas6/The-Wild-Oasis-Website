import SpinnerMini from "@/starter/components/SpinnerMini";

//Global Loader
export default function Loading() {
  return (
    <div className="grid items-center justify-center ">
      <SpinnerMini />
      <p className="text-xl text-primary-200">Loading Cabin Data</p>
    </div>
  );
}
