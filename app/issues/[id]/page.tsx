async function IssuePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  console.log('ID', id)

  return <div>IssuePage</div>
}

export default IssuePage
