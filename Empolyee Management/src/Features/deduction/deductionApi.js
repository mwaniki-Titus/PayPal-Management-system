export const deductionApi=createApi({
    reducerPath:'dedcutionApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:8000/api/`}),
    tagTypes:[`Deductions`],
    endpoints:(builder)=>({
        createNewDeduction:builder.mutation({
            query:(deduction)=>({
                url:`deduction`,
                method:`POST`,
                body:deduction
            }),
            invalidatesTags:[`Deductions`]
        }),

        getAllDeduction:builder.query({
            query:()=>({
                url:`deduction`,
                method:`GET`,
                
            })
        })
    })
})


export const {useCreateNewDeductionMutation,useGetAllDeductionQuery}=deductionApi

