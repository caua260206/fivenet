import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    const url = 'https://n8n-delipe-n8n.mogwag.easypanel.host/webhook/api/email-json';

    const emailData = {
        "from": "'Formulário | Netcintra' <site@delipe.com>",
        "email": ["delivery.comercial@netcintra.com.br", "pedido.site@netcintra.com.br"],
        "subject": "Nova Solicitação de Assinatura | Site",
        "text": `
            Nome/Razão: ${body.nome}
            Data de Nascimento: ${body.dataNascimento}
            CPF/CNPJ: ${body.documento}
            RG/IE: ${body.rg}
            Endereço: ${body.endereco}
            CEP: ${body.cep}
            Condomínio: ${body.condominio}
            Complemento: ${body.complemento}
            Telefone: ${body.telefone}
            E-mail: ${body.email}
            Data de Vencimento: ${body.dataVencimento}
            Plano Escolhido: ${body.plano}
            Data para Instalação: ${body.dataInstalacao}
            Período para Instalação: ${body.periodoInstalacao}
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

        const data = await response.json();
        console.log('Email enviado:', data);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Solicitação de assinatura enviada com sucesso'
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
                message: 'Erro ao enviar solicitação'
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