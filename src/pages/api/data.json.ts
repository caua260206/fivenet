import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    const url = 'https://delipe-mail-907e570e0648.herokuapp.com/send-mail';

    const emailData = {
        "from": "'Formulário | Netcintra' <site@delipe.com>",
        "email": "suporte@netcintra.com.br",
        "subject": body.subject || "Formulário de contato | Site",
        "text": body.text || `
            Nome: ${body.nome}
            Email: ${body.email}
            Telefone: ${body.telefone}
            Endereço: ${body.endereco}
            Área de Interesse: ${body.area}
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
                message: 'E-mail enviado com sucesso'
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
                message: 'Erro ao enviar e-mail'
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


// import nodemailer from "nodemailer"
// export const prerender = false;

// export const POST: APIRoute = async ({ params, request,  }) => {
//     const body = await request.json();


//         console.log(body)
//         // Configurações do serviço de e-mail
//         const emailConfig = {
//             host: import.meta.env.SMTP_HOST,
//             port: Number(import.meta.env.SMTP_PORT),
//             secure: import.meta.env.SMTP_SECURE==="true",
//             auth: {
//                 user: import.meta.env.SMTP_AUTH_USER,
//                 pass: import.meta.env.SMTP_AUTH_PASSWORD,
//             },
//         };

//         // Crie um objeto de transporte de e-mail
//         const transporter = nodemailer.createTransport(emailConfig);

//         // Defina os detalhes do e-mail a ser enviado
//         const mailOptions = {
//             from: import.meta.env.SMTP_FROM,
//             to: import.meta.env.SMTP_CLIENT_EMAIL,
//             subject: "Formulário Site | Área de cobertura",
//             text: `Nome: ${body.nome}\nTelefone: ${body.telefone}\nCEP: ${body.cep}`,
//         };

//         // Envie o e-mail
//         await transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log("Erro ao enviar e-mail:", error);
//             } else {
//                 console.log("E-mail enviado:", info.response);
//             }
//         });



//     return new Response(
//       JSON.stringify({
//         name: "anakin"
//       })
//     )
//   }
