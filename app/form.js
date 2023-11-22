import { roomTypesLumenPerM2 } from "./constants/roomTypesLumenPerM2"
import { useTranslation } from "./hooks/useTranslation"

export const Form = ({ register, formState, onSubmit }) => {
  const { t } = useTranslation()

  return (
    <form on className="w-full grid grid-cols-12 gap-4" onSubmit={onSubmit}>
      <h1 className="text-3xl col-span-12 mb-8">{t('title')}</h1>
      <div className="form-control w-full col-span-12">
        <label className="label">
          <span className="label-text">{t('form.roomType.label')}</span>
        </label>
        <select type="text" {...register("roomType", { required: true })} id="roomType" placeholder={t('form.roomType.placeholder')} className="select select-bordered w-full ">
        {Object.keys(roomTypesLumenPerM2).map((roomType) => (
          <option value={roomType} key={roomType}>{t(`form.roomType.options.${roomType}`)}</option>
        ))}
    </select>
      </div>
      <div className="form-control w-full col-span-4">
        <label className="label">
          <span className="label-text">{t('form.roomX.label')}</span>
        </label>
        <input type="number" {...register("roomX", { min: 0, required: true })} step={0.1} id="roomX" placeholder={t('form.roomX.placeholder')} className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full col-span-4">
        <label className="label">
          <span className="label-text">{t('form.roomY.label')}</span>
        </label>
        <input type="number" {...register("roomY", { min: 0, required: true })} step={0.1} id="roomY" placeholder={t('form.roomY.placeholder')} className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full col-span-4">
        <label className="label">
          <span className="label-text">{t('form.roomZ.label')}</span>
        </label>
        <input type="number" {...register("roomZ", { min: 0, required: true })} step={0.1} id="roomZ" placeholder={t('form.roomZ.placeholder')} className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full col-span-12">
        <label className="label">
          <span className="label-text">{t('form.lightLumens.label')}</span>
        </label>
        <input type="number" {...register("lumensByLight", { min: 0, required: true })} id="lumensByLight" placeholder={t('form.lightLumens.placeholder')} className="input input-bordered w-full " />
      </div>
      <button type="submit" className="btn btn-primary col-span-12" disabled={!formState.isValid}>{t('form.submit')}</button>
    </form>
  )
}
