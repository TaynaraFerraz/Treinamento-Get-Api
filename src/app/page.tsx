'use client'
import getApi from "@/api/get-secao";
import Card from "@/components/SecaoApi/Card";
import { useEffect, useState } from "react";

type ApiProps = {
  id: number,
  title: string,
  text: string
}

export default function Home() {

  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {

    const fetchData = async () =>{

      try{

        const {identities} = await getApi();
        setCards(identities);

      }catch{
          console.error('Deu erro');
      }

    };
    fetchData();
  });
 
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl">Treinamento</h1>

      <div className="flex gap-10">
        {(cards.map((card) => (
          <Card id={card.id} title={card.title} text={card.text} />
        )))}
      </div>

    </div>
  );
}
