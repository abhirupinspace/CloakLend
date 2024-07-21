import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import "./index.css";  // Import Tailwind CSS
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThirdwebProvider } from "thirdweb/react";
import Borrow from "./pages/Borrow";
import Dashboard from "./pages/Dashboard";
import Lend from "./pages/Lend";
import Profile from "./pages/Profile";
import Repay from "./pages/Repay";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <ThirdwebProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/borrow' element={<Borrow />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/lend' element={<Lend />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/repay' element={<Repay />} />
                </Routes>
            </BrowserRouter>
        </ThirdwebProvider>
    </QueryClientProvider>
    </React.StrictMode>
);