export interface Guess {
  letter: string
  status: 'correct' | 'present' | 'absent'
}