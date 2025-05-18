
import React from 'react';

const CodeBackground: React.FC = () => {
  const codeLines = [
    "import numpy as np",
    "import tensorflow as tf",
    "from sklearn import metrics",
    "",
    "# AI Integration with Hardware",
    "class HardwareAI:",
    "    def __init__(self, device):",
    "        self.device = device",
    "        self.model = None",
    "",
    "    def connect_device(self):",
    "        print(f\"Connecting to {self.device}\")",
    "        # ESP32/Arduino connection code",
    "",
    "    def train_model(self, data, labels):",
    "        model = tf.keras.Sequential([",
    "            tf.keras.layers.Dense(128, activation='relu'),",
    "            tf.keras.layers.Dropout(0.2),",
    "            tf.keras.layers.Dense(10, activation='softmax')",
    "        ])",
    "        model.compile(optimizer='adam',",
    "                     loss='sparse_categorical_crossentropy',",
    "                     metrics=['accuracy'])",
    "        model.fit(data, labels, epochs=10)",
    "        self.model = model",
    "        return model",
    "",
    "# Socket Programming",
    "import socket",
    "",
    "def create_server(host, port):",
    "    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
    "    server.bind((host, port))",
    "    server.listen(5)",
    "    return server",
    "",
    "# Driver Safety Analysis",
    "def analyze_driver_state(frame):",
    "    # Process video frame",
    "    # Detect eye closure and head position",
    "    eyes_closed = detect_eyes(frame)",
    "    head_position = track_head(frame)",
    "    ",
    "    if eyes_closed > 0.8 and head_position == 'down':",
    "        return 'DROWSY'",
    "    return 'ALERT'",
  ];

  return (
    <div className="h-full overflow-hidden">
      <div className="animate-code-scroll py-8" style={{ width: '100%' }}>
        {[...codeLines, ...codeLines].map((line, index) => (
          <div
            key={index}
            className={`code-line ${
              index % 7 === 0 ? "code-line-highlight" : ""
            } px-4 py-0.5`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBackground;
