import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, service, message } = body;

    // Basic validation in Node.js backend
    if (!name || !email || !service || !message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Todos los campos son obligatorios.'
        },
        { status: 400 }
      );
    }

    // Simulated processing (e.g. ready for Nodemailer, Resend or SendGrid integration)
    console.log('[NODE API] Nuevo mensaje recibido:', { name, email, service, message });

    return NextResponse.json<ApiResponse>({
      success: true,
      message: '¡Mensaje recibido con éxito! Nos pondremos en contacto contigo en menos de 24 horas.',
      data: {
        receivedAt: new Date().toISOString(),
        client: name,
        requestedService: service
      }
    });

  } catch (error) {
    console.error('[NODE API Error]:', error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'Ocurrió un error interno en el servidor.'
      },
      { status: 500 }
    );
  }
}
