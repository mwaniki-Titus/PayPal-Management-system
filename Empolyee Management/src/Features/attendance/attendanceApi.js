
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendanceApi = createApi({
    reducerPath: "attendanceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Attendance"],
    endpoints: (builder) =>({
        getAttendance: builder.query({
            query: () => ({
                url: "attendance/getAll",
                method: "GET",
            }) ,  
            providesTags: ["Attendance"]
                       
        }),

        getAttendanceByID: builder.query({
          
            query: (AttendanceID) =>({
                url: `/attendance/attendanceByID${AttendanceID}`,
                method: "GET",
            }),
            providesTags: ["Attendance"]
        }),
       

        addAttendance: builder.mutation({
            query: (attendance) =>({
                url:"attendance/AddAttendance",
                method: "POST",
                body: attendance,
            }),
            invalidatesTags: ["Attendance"],
        }),

        updateAttendance: builder.mutation({
            query: (AttendanceID) =>({
                url:`attendance/UpdateAttendanceByID/${AttendanceID}`,
                method: "PUT",
            }),
            invalidatesTags: ["Attendance"],
        }),


        deleteAttendance: builder.mutation({
            query:(AttendanceID) => ({
                url:`attendance/deleteattendanceByID/${AttendanceID}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Attendance"],
        })

        


    })
});

export const {useGetAttendanceQuery, useAddAttendanceMutation,
useDeleteAttendanceMutation, useGetAttendanceByIDQuery, useUpdateAttendanceMutation } = attendanceApi;