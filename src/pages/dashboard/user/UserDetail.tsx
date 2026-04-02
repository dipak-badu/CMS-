import { useParams, useSearchParams } from "react-router";
export default function UserDetail() {
  const params = useParams<{ id: string }>();
  const [query, setQuery] = useSearchParams();
  return (
    <>
      user detail of {params.id}
      <br />
      Query:Search: P{query.get("seach?")}, page:{query.get("page")}
    </>
  );
}
