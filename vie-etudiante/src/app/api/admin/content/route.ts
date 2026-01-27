import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type) {
        return NextResponse.json({ error: 'Missing type parameter' }, { status: 400 });
    }

    try {
        const filePath = path.join(DATA_DIR, `${type}.json`);
        const fileContent = await fs.readFile(filePath, 'utf8');
        return NextResponse.json(JSON.parse(fileContent));
    } catch (error) {
        return NextResponse.json({ error: 'File not found or invalid' }, { status: 404 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, data } = body;

        if (!type || !data) {
            return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });
        }

        const filePath = path.join(DATA_DIR, `${type}.json`);
        await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
