import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    const url = 'https://delipe-mail-907e570e0648.herokuapp.com/send-mail';

    const emailData = {
        "from": "'Formulário | Netcintra' <site@delipe.com>",
        "email": "delivery.comercial@netcintra.com.br",
        "subject": "Nova Mensagem de Contato | Site",
        "text": `
            Nome: ${body.nome}
            E-mail: ${body.email}
            Telefone: ${body.telefone}
            CEP: ${body.cep}
            Mensagem: ${body.mensagem}
        `,
        "smtp": 'YjI5NmU3ZTA0Y2RkMGYxMTMwNWVjNjMwYmMxMzg1ODNmN2VjZDZjODcwNWU1ZDIxNDIzNGQ0NjM5MTFjMGFlZTA4MGZmNDZjNzMwYWZiNmExZDA4ZDc0NjA2MTZjZWE5OTY1MTdmMzMwOWYzZjNlZWVkMTYzYTM3ZTA4MTBlODhhZGU4NDMxYjkzOTUxOGM3NGJjMWY5NzcyNDY5MjYwZTM5NWNjNjYwNTkyNDk5MTQzNGQyNzYyOGJhYTYyZTY2'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar e-mail');
        }

        const data = await response.json();
        console.log('Email enviado:', data);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Mensagem enviada com sucesso'
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Erro ao enviar mensagem'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
} 