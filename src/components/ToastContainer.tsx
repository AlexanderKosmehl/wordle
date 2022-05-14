interface Props {
  toast: string
}
export default function ToastContainer({ toast }: Props) {
  return (
    <div className="flex justify-center items-center h-20">
      {toast && (
        <div className="p-2 bg-gray-600 rounded-lg text-white font-semibold">
          {toast}
        </div>
      )}
    </div>
  )
}
