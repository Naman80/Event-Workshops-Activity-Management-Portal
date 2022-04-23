import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="flex h-full items-center justify-center text-2xl font-serif">
            <div class="card mx-8">
                <div class="card-body">
                    <div class="flex flex-col items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                        <div class="mt-3">
                            <h4>John Doe</h4>
                            <p class="text-secondary mb-1">Participant</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="flex justify-between">
                        <div class="">
                            <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="">
                            Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div class="flex justify-between">
                        <div class="">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="">
                            fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div class="flex justify-between">
                        <div class="">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="">
                            (239) 816-9029
                        </div>
                    </div>
                    <hr />
                    <div class="flex justify-between">
                        <div class="">
                            <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="">
                            (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div class="flex justify-between">
                        <div class="">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="">
                            Bay Area, San Francisco, CA
                        </div>
                    </div>
                    <hr />
                </div>
            </div>



        </div>
    );
};

export default Dashboard;