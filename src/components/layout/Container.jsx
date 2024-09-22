export default function Container({children}){
  return (
    <main className="pt-16 p-2 overflow-y-auto overflow-x-hidden">
      {children}
    </main>
  )
}