// export async function getVideo(subcourseId: string) {
//     const subcourseNumber = parseFloat(subcourseId);

//     if (!isNaN(subcourseNumber) && prisma) {
//         const subcourse = await prisma.part.findMany({
//             where: {
//                 subcourseId: parseInt(subcourseId, 10),
//             },
//         });
//         return subcourse;
//     } else {
//         return []; // Returning an empty array instead of null
//     }
// }
import prisma from "@/lib/db";

export async function getVideo(subcourseId: string) {
    const subcourse = await prisma.part.findMany({
        where: {
            subcourseId : parseInt(subcourseId.toString(), 10),
        },
    });
    return subcourse;
}