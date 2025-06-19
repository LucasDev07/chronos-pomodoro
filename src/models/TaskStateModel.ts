import type { TaskModel } from './TaskModel';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
