import { ref } from 'vue'

export function getRandomColor() {
  const color = ref()
  const hover = ref()
  const colors = [
    { name: 'Green', hex: '#006400' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Yellow', hex: '#9B870C' },
    { name: 'Blue', hex: '#00008B' },
    { name: 'Black', hex: '#000000' }
  ]

  const hovers = [
    { name: 'Green', hex: '#008000' },
    { name: 'Purple', hex: '#800099' },
    { name: 'Yellow', hex: '#eab308' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Black', hex: '#1C1C1C' }
  ]

  const colorIndex = Math.floor(Math.random() * colors.length)
  const hoverObject = hovers.find((item) => item.name === colors[colorIndex].name)
  color.value = colors[colorIndex].hex
  hover.value = hoverObject.hex
  return { color, hover }
}
