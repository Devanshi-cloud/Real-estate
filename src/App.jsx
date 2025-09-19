import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const CreateListing = lazy(() => import("./pages/CreateListing"));
const ListingDetails = lazy(() => import("./pages/ListingDetails"));
const TripList = lazy(() => import("./pages/TripList"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-[#404040] bg-primary">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/listing/:listingId" element={<ListingDetails />} />
            <Route path="/:userId/trips" element={<TripList />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}