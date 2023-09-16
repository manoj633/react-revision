import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const DynamicFields = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { phNumbers: [{ numbers: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const submitForm = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="primary-number">Primary contact</label>
        <input type="text" {...register("primary-number")} />
        {fields.map((field, index) => {
          return (
            <div className="form-control" key={field.id}>
              <input type="text" {...register(`phNumbers.${index}.number`)} />
              {index > 0 && (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({ numbers: "" });
          }}
        >
          Add phone number
        </button>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
