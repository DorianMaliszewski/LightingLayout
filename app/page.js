"use client"
import { useForm } from "react-hook-form"
import { Form } from "./form"
import { useState } from "react"
import { calculateLightCount } from "./helpers/calculateLightCount"
import dynamic from "next/dynamic";

const Result = dynamic(() => import("./result"), {
  ssr: false,
});

export default function Home() {
  const [result, setResult] = useState(undefined)
  const { register, formState, handleSubmit } = useForm({
    mode: "all",
    values: {
      roomType: "bedroomAdult",
      roomX: 4,
      roomY: 3,
      roomZ: 2.5,
      lumensByLight: 500,
    },
  })

  const onSubmit = (values) => {
    setResult({
      ...values,
      lightCount: calculateLightCount(values)
    })
  }

  return (
    <main className="p-4 grid grid-cols-1 gap-10 px-10 lg:grid-cols-2">
      <Form register={register} formState={formState} onSubmit={handleSubmit(onSubmit)} />
      {formState.isSubmitted && result ? (
        <Result {...result} />
      ) : null}
    </main>
  )
}
