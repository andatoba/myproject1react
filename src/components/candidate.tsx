import type { CandidateType } from '@/types/candidate'

import { cn } from '@/lib/utils'

type CandidateProps = {
  data: CandidateType
}

const Candidate = (props: CandidateProps) => {
  const { name, age, experience, status, skills, working } = props.data

  return (
    <article className="border border-gray-300 rounded-lg p-4 shadow-md flex-col">
      <div className="flex items-center mb-4 gap-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p
          className={cn(
            'text-white text-sm font-semibold px-2 py-1 rounded-full',
            getStatusColor(status),
          )}
        >
          {status}
        </p>
      </div>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Experience: {experience} years</p>

      {working ? (
        <p className="text-green-500 flex items-center gap-2">
          ✅ Currently working
        </p>
      ) : (
        <p className="text-red-500 flex items-center gap-2">
          ❌ Not currently working
        </p>
      )}

      <h3 className="text-lg font-semibold text-gray-800 mt-2">Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li className="text-gray-600 text-sm" key={index}>
            {skill}
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full" onClick={copyData}>
        Copy data
      </button>
    </article>
  )

  function copyData() {
    const textToCopy = `Name: ${name}, Status: ${status}, Working: ${working}, Age: ${age}, Experience: ${experience}, Skills: ${skills.join(
      ', ',
    )}`

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert('Data copied to clipboard!'))
      .catch((err) => console.error('Failed to copy: ', err))
  }

  function getStatusColor(s: string) {
    switch (s) {
      case 'Pending':
        return 'bg-yellow-500'
      case 'Reviewing':
        return 'bg-blue-500'
      case 'Accepted':
        return 'bg-green-500'
      case 'Rejected':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }
}

export default Candidate
