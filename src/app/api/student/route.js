import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/Student";

export const POST = async (req, res) => {
    await connectDB();
    try {
        const body = await req.json();
        const newStudent = await StudentModel.create(body);
        return NextResponse.json({data: newStudent}, {status: 201});
    } catch (error) {
        console.error("Error creating student:", error);
        return NextResponse.json({data: null, error: 'Failed to create student'}, {status: 500});
    }
};

export const GET = async () => {
    await connectDB()
    try {
        const result = await StudentModel.find({})
        return NextResponse.json({data:result}, {status:200})
    } catch (error) { 
        console.error("Error fetching students:", error); 
        return NextResponse.json({data: null, error: 'Failed to fetch students'}, {status: 500}); 
    } 
};