const Button = ({ className, children }: { children: React.ReactNode, className?: string }) => {
  const btnClass = `mt-4 rounded-lg bg-primary py-3 font-medium text-white ${className}`
  return <button className={btnClass}>{children}</button>
}

export { Button }
