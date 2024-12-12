

// import { Center, Spinner, VStack, Heading,Box } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import supabase from "@/libs/supabase";

// export default function Loading() {
//   const router = useRouter();

//   useEffect(() => {
//     const verifySession = async () => {
//       try {
//         const { data: sessionData, error } = await supabase.auth.getSession();
//         if (error) throw error;

//         if (sessionData?.session) {
//           console.log("セッション確認成功: /book にリダイレクト");
//           // 4秒待機してからリダイレクト
//           setTimeout(() => {
//             router.replace("/book");
//           }, 4000);
//         } else {
//           console.log("未認証: / にリダイレクト");
//           router.replace("/");
//         }
//       } catch (err) {
//         console.error("セッション確認エラー:", err);
//         router.replace("/");
//       }
//     };

//     verifySession();
//   }, [router]);

//   return (
//     <Center h="100vh">
//       {/* <VStack spacing={4}>
//         <Spinner size="xl" />
//         <Heading size="md">読み込み中...</Heading>
//       </VStack> */}
//      <Box display="flex" flexDirection="column" alignItems="center" gap="16px">
//         <Spinner size="xl" />
//         <Heading size="md">読み込み中...</Heading>
//       </Box>

//     </Center>
//   );
// }




import { Center, Spinner, VStack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "@/libs/supabase";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const { data: sessionData, error } = await supabase.auth.getSession();
        if (error) throw error;

        if (sessionData?.session) {
          console.log("セッション確認成功: /book にリダイレクト");
          // 4秒待機してからリダイレクト
          setTimeout(() => {
            router.replace("/book");
          }, 4000);
        } else {
          console.log("未認証: / にリダイレクト");
          router.replace("/");
        }
      } catch (err) {
        console.error("セッション確認エラー:", err);
        router.replace("/");
      }
    };

    verifySession();
  }, [router]);

  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Spinner size="xl" />
        <Heading size="md">読み込み中...</Heading>
      </VStack>
    </Center>
  );
}

