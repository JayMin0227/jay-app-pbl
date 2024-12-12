



// import { Button } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { FaBook } from "react-icons/fa";

// export function ItemTableButton() {
//   const router = useRouter();

//   return (
//     <Button
//       colorScheme="blue"
//       onClick={async () => {
//         await router.push("/book"); // 必ずPromise<void>を返す
//         return true;
//       }}
//       style={{ display: "flex", alignItems: "center", gap: "8px" }}
//     >
//       <FaBook />
//       <span>メモ</span>
//     </Button>
//   );
// }


import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaBook } from "react-icons/fa";

export function ItemTableButton() {
  const router = useRouter();

  return (
    <Button
      colorScheme="blue"
      leftIcon={<Icon as={FaBook} />}
      onClick={() => router.push("/book")}
    >
      メモ
    </Button>
  );
}

