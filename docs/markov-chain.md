---
title: Markov Chain
layout: home
nav_order: 5

---
{% include latex_template.html %}

## Discussions on markov processes Contitnued
{: .text-delta .fs-5 .fw-700}

In a different blog, I noted the use of a markov processes in the context of natural language processing. Now in this blog, we will be going through some important details with regard to the concept.

We will go through some code in the subsequent paragraph with respect to how to simulate Markov Chain in coding.

**Table Of Contents**
{: .no-toc .fs-3 .fw-700 .text-delta}

1. TOC
{:toc}

#### Markov Chain Basics
{: .fs-4 .fw-700 }


A Markov chain is a mathematical system that undergoes transitions from one state to another within a finite or countable number of states. It is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it.

#### Components of a Markov Chain
{: .fs-4 .fw-700 }


1. **States**: The different possible conditions or configurations the system can be in.
   - Let's denote the set of all states as $ S = \{ s_1, s_2, \ldots, s_n \} $.

2. **Transition Probabilities**: The probabilities of moving from one state to another.
   - Denoted by $ P_{ij} = P(X_{t+1} = s_j \mid X_t = s_i) $, where $ P_{ij} $ is the probability of transitioning from state $ s_i $ to state $ s_j $.

3. **Transition Matrix**: A matrix $ P $ where each element $ P_{ij} $ represents the transition probability from state $ s_i $ to state $ s_j $.

$$
    P = \begin{pmatrix}
    P_{11} & P_{12} & \cdots & P_{1n} \\
    P_{21} & P_{22} & \cdots & P_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    P_{n1} & P_{n2} & \cdots & P_{nn}
  \end{pmatrix} $$

#### Markov Property
{: .fs-4 .fw-700 }


The Markov property states that the probability of transitioning to the next state depends only on the current state and not on the past states:
$ P(X_{t+1} = s_j \mid X_t = s_i, X_{t-1} = s_{i-1}, \ldots, X_0 = s_0) = P(X_{t+1} = s_j \mid X_t = s_i) $

### Step-by-Step Process
{: .fs-3 .fw-700 .text-delta}

Let's go through the process of a Markov chain step by step.

#### Step 1: Define the States
{: .fs-2 .fw-700 }

Identify all possible states of the system. Suppose we have a simple weather system with three states:
- $ s_1 $: Sunny
- $ s_2 $: Cloudy
- $ s_3 $: Rainy

#### Step 2: Define the Transition Probabilities
{: .fs-2 .fw-700 }


Determine the probabilities of moving from one state to another. For example, the transition probabilities might be:

- $ P_{11} = 0.7 $ (probability of sunny to sunny)
- $ P_{12} = 0.2 $ (probability of sunny to cloudy)
- $ P_{13} = 0.1 $ (probability of sunny to rainy)
- $ P_{21} = 0.3 $ (probability of cloudy to sunny)
- $ P_{22} = 0.4 $ (probability of cloudy to cloudy)
- $ P_{23} = 0.3 $ (probability of cloudy to rainy)
- $ P_{31} = 0.2 $ (probability of rainy to sunny)
- $ P_{32} = 0.3 $ (probability of rainy to cloudy)
- $ P_{33} = 0.5 $ (probability of rainy to rainy)

These can be represented in the transition matrix $ P $:

$$ P = \begin{pmatrix}
    0.7 & 0.2 & 0.1 \\
    0.3 & 0.4 & 0.3 \\
    0.2 & 0.3 & 0.5
\end{pmatrix} $$

#### Step 3: Initial State Distribution
{: .fs-2 .fw-700 }

Define the initial state distribution vector $ \pi $, which represents the probability distribution of starting in each state. For example, if we start with a 100% chance of it being sunny:

$$ \pi = \begin{pmatrix}
    1 \\
    0 \\
    0
\end{pmatrix} $$

#### Step 4: State Prediction
{: .fs-2 .fw-700 }


To predict the state distribution after one step, multiply the initial state distribution vector $ \pi $ by the transition matrix $ P $:

$$ \pi^{(1)} = \pi P $$

$$ \pi^{(1)} = \begin{pmatrix}
    1 & 0 & 0
\end{pmatrix}  \begin{pmatrix}
    0.7 & 0.2 & 0.1 \\
    0.3 & 0.4 & 0.3 \\
    0.2 & 0.3 & 0.5
\end{pmatrix} $$


$$ \pi^{(1)} = \begin{pmatrix}
    0.7 & 0.2 & 0.1
\end{pmatrix} $$


This tells us that after one step, there's a 70% chance of it being sunny, a 20% chance of it being cloudy, and a 10% chance of it being rainy.

#### Step 5: Long-Term Behavior

To find the steady-state distribution (long-term behavior), solve for $ \pi $ in the equation:
$ \pi P = \pi $
This often involves solving a system of linear equations. The steady-state distribution is the vector $ \pi $ that remains unchanged after application of the transition matrix $ P $.

#### Example Calculation
{: .fs-4 .fw-700 }


If we continue the prediction for multiple steps, we can see how the state distribution evolves over time. For example, after two steps:


$$ \pi^{(2)} = \pi^{(1)} P $$

$$ \pi^{(2)} = \begin{pmatrix}
    0.7 & 0.2 & 0.1
\end{pmatrix} \begin{pmatrix}
    0.7 & 0.2 & 0.1 \\
    0.3 & 0.4 & 0.3 \\
    0.2 & 0.3 & 0.5
\end{pmatrix} $$

$$ \pi^{(2)} = \begin{pmatrix}
  0.7 \cdot 0.7 + 0.2 \cdot 0.3 + 0.1 \cdot 0.2 \\
  0.7 \cdot 0.2 + 0.2 \cdot 0.4 + 0.1 \cdot 0.3 \\
  0.7 \cdot 0.1 + 0.2 \cdot 0.3 + 0.1 \cdot 0.5
\end{pmatrix} $$

$$ \pi^{(2)} = \begin{pmatrix}
    0.53 & 0.26 & 0.21
\end{pmatrix} $$


So after two steps, there's a 53% chance of it being sunny, a 26% chance of it being cloudy, and a 21% chance of it being rainy.

#### Summary
{: .fs-4 .fw-700 }


A Markov chain is a powerful tool for modeling stochastic processes where the next state depends only on the current state. The key components include states, transition probabilities, and the transition matrix. The process involves defining the states and transition probabilities, computing state predictions, and analyzing long-term behavior through steady-state distributions.

In this example, we define a transition matrix P for a 3-state Markov process. We then define a function simulate_markov that takes the transition matrix, the number of states, and the number of steps to simulate as input, and returns a list of the system's states at each time step.

The function initializes the state vector to all zeros, with a 1 in the first position to indicate that the system starts in state 0. It then simulates the Markov process by iteratively selecting the next state based on the current state and the transition probabilities. The current state is added to a history list at each time step.

Finally, we simulate the Markov process for 100 steps and print the resulting state history.

## In What Scenarios Is Markov Chain Applicable?
{: .fs-4 .fw-700 }

Simulating all these processes using Markov processes can be quite extensive. However, I can provide a basic framework and example for a few of these applications, demonstrating how Markov processes can be applied. We will use Python and some common libraries such as NumPy for these simulations.

This section breaks down a simple example of how to build a simple markov chain in code example.

```python


        import numpy as np

        # Define the number of states and the transition matrix
        N = 3
        P = np.array([[0.5, 0.5, 0.0],
                    [0.0, 0.5, 0.5],
                    [0.5, 0.0, 0.5]])

        # Define a function to simulate the Markov process
        def simulate_markov(P, N, num_steps):
            # Initialize the state vector
            state = np.zeros(N)
            state[0] = 1

            # Initialize the state history
            state_history = [state]

            # Simulate the Markov process
            for i in range(num_steps):
                # Determine the next state
                next_state = np.random.choice(N, p=P[:, state])

                # Update the state vector
                state = next_state

                # Add the current state to the history
                state_history.append(state)

            return state_history

        # Simulate the Markov process for 100 steps
        state_history = simulate_markov(P, N, 100)
        print(state_history)    



```


### Example 1: Modeling Stock Prices

We will model the stock price as a Markov process where each state represents a certain price level, and transitions occur based on market conditions.

```python

    import numpy as np
    import matplotlib.pyplot as plt

    # Define states (price levels)
    states = np.array([90, 100, 110, 120])
    n_states = len(states)

    # Define transition matrix
    P = np.array([
        [0.7, 0.2, 0.1, 0.0],  # From 90
        [0.1, 0.7, 0.2, 0.0],  # From 100
        [0.0, 0.2, 0.7, 0.1],  # From 110
        [0.0, 0.1, 0.2, 0.7],  # From 120
    ])

    # Initial state (starting price)
    initial_state = 1  # Assume starting price is 100

    # Number of steps to simulate
    n_steps = 100

    # Simulate the Markov process
    current_state = initial_state
    price_history = [states[current_state]]

    for _ in range(n_steps):
        next_state = np.random.choice(n_states, p=P[current_state])
        price_history.append(states[next_state])
        current_state = next_state

    # Plot the results
    plt.figure(figsize=(10, 6))
    plt.plot(price_history)
    plt.title('Simulated Stock Prices Using Markov Process')
    plt.xlabel('Time Steps')
    plt.ylabel('Price')
    plt.grid(True)
    plt.show()

```

### Example 2: Disease Progression

We will model the progression of a disease over time, where states represent different health conditions (e.g., Healthy, Sick, Recovered).

```python

    # Define states (health conditions)
    states = ["Healthy", "Sick", "Recovered"]
    n_states = len(states)

    # Define transition matrix
    P = np.array([
        [0.85, 0.10, 0.05],  # From Healthy
        [0.15, 0.70, 0.15],  # From Sick
        [0.05, 0.10, 0.85],  # From Recovered
    ])

    # Initial state
    initial_state = 0  # Assume starting state is Healthy

    # Number of steps to simulate
    n_steps = 50

    # Simulate the Markov process
    current_state = initial_state
    health_history = [states[current_state]]

    for _ in range(n_steps):
        next_state = np.random.choice(n_states, p=P[current_state])
        health_history.append(states[next_state])
        current_state = next_state

    # Print the results
    print("Health Condition Over Time:")
    print(" -> ".join(health_history))

```

### Example 3: Queueing Systems in a Service System

We will model a queueing system where states represent the number of customers in a queue.

```python

    # Define states (number of customers in queue)
    states = [0, 1, 2, 3, 4, 5]  # Queue capacity is 5
    n_states = len(states)

    # Define transition matrix
    P = np.array([
        [0.1, 0.9, 0.0, 0.0, 0.0, 0.0],  # From 0 customers
        [0.5, 0.4, 0.1, 0.0, 0.0, 0.0],  # From 1 customer
        [0.2, 0.5, 0.3, 0.0, 0.0, 0.0],  # From 2 customers
        [0.0, 0.3, 0.5, 0.2, 0.0, 0.0],  # From 3 customers
        [0.0, 0.0, 0.4, 0.5, 0.1, 0.0],  # From 4 customers
        [0.0, 0.0, 0.0, 0.5, 0.4, 0.1],  # From 5 customers
    ])

    # Initial state
    initial_state = 0  # Assume starting with an empty queue

    # Number of steps to simulate
    n_steps = 50

    # Simulate the Markov process
    current_state = initial_state
    queue_history = [states[current_state]]

    for _ in range(n_steps):
        next_state = np.random.choice(n_states, p=P[current_state])
        queue_history.append(states[next_state])
        current_state = next_state

    # Plot the results
    plt.figure(figsize=(10, 6))
    plt.plot(queue_history)
    plt.title('Simulated Queue Length Using Markov Process')
    plt.xlabel('Time Steps')
    plt.ylabel('Number of Customers in Queue')
    plt.grid(True)
    plt.show()

```

### Example 4: Customer Loyalty

We will model customer loyalty, predicting transitions between different customer states (Active, Inactive, Loyal).

```python

    # Define states (customer states)
    states = ["Active", "Inactive", "Loyal"]
    n_states = len(states)

    # Define transition matrix
    P = np.array([
        [0.7, 0.2, 0.1],  # From Active
        [0.3, 0.6, 0.1],  # From Inactive
        [0.1, 0.2, 0.7],  # From Loyal
    ])

    # Initial state
    initial_state = 0  # Assume starting state is Active

    # Number of steps to simulate
    n_steps = 50

    # Simulate the Markov process
    current_state = initial_state
    loyalty_history = [states[current_state]]

    for _ in range(n_steps):
        next_state = np.random.choice(n_states, p=P[current_state])
        loyalty_history.append(states[next_state])
        current_state = next_state

    # Print the results
    print("Customer Loyalty Over Time:")
    print(" -> ".join(loyalty_history))

```

## Summary
{: .fs-4 .fw-700 .text-delta}

This framework can be extended to simulate other processes like economic forecasting, pharmacokinetics, network protocols, etc.

Each simulation contains these properties:

| :---: |
1. **States:** A system can exist in different states, representing distinct configurations or conditions. Denoted by symbols, numbers, or labels. |
2. **Transition Probabilities:** Markov processes are characterized by transition probabilities, which determine the likelihood of moving from one state to another in the next time step. These probabilities are often organized into a transition probability matrix. |
3. **Transition Probability Matrix:** A square matrix where each element represents the probability of transitioning from one state to another. Rows correspond to the current state, and columns correspond to the next state. |
4. **Markov Property:** The key feature of Markov processes is the Markov property, stating that the future evolution of the system depends only on its current state and is independent of how the system reached its current state. |
5. **Homogeneity:** Markov processes are often assumed to be homogeneous, meaning that transition probabilities do not change over time. The system's dynamics are consistent throughout. |
6. **Continuous and Discrete Time:** Markov processes can be classified into continuous-time and discrete-time processes based on whether the state transitions occur at every instant or at discrete time intervals. |
7. **Stationary Distribution:** In a steady state, the system may reach a stationary distribution, where the probabilities of being in each state remain constant over time. |
8. **Absorbing and Transient States:** Some states may be absorbing, meaning that once entered, the system stays in that state permanently. Transient states are those from which the system may leave and not return. |
9. **Applications:** Markov processes find applications in various fields, including physics, economics, biology, and computer science, for modeling dynamic systems with probabilistic transitions (as demonstrated above). |
10. **Markov Chain:**  A specific type of Markov process where the state space is discrete and the time parameter takes on discrete values. |


This basic approach can be adapted and extended to suit the specific characteristics and requirements of each application.


#### Markov Chain
{: .fs-4 .fw-700 .text-delta}

A Markov chain is a specific type of Markov process that deals with discrete states and discrete time steps. It is characterized by the following:

1. **Discrete State Space**: The set of possible states $ S = \{s_1, s_2, \ldots, s_n\} $ is finite or countable.
2. **Discrete Time Steps**: The process evolves in discrete time steps $ t = 0, 1, 2, \ldots $.
3. **Markov Property**: The probability of transitioning to the next state depends only on the current state and not on the sequence of events that preceded it.

##### Formal Definition
{: .fs-3 .fw-700 .text-delta}

A Markov chain is defined by:
- A set of states $ S $.
- A transition probability matrix $ P $, where $ P_{ij} $ represents the probability of moving from state $ s_i $ to state $ s_j $. The full formula looks like below.

$$ P(X_{t+1} = s_j \mid X_t = s_i) = P_{ij} $$

### Markov Process
{: .fs-4 .fw-700 .text-delta}

A Markov process is a more general concept that includes both discrete and continuous cases. It is characterized by:

1. **State Space**: The set of possible states can be discrete (finite or countable) or continuous.
2. **Time Steps**: The process can evolve in either discrete time steps (like in a Markov chain) or continuous time.
3. **Markov Property**: Similar to the Markov chain, the future state depends only on the current state and not on past states.

#### Types of Markov Processes
{: .no-toc .fs-3 .fw-700}

1. **Discrete-Time Markov Process (Markov Chain)**:
   - As described above, it deals with discrete states and discrete time steps.

2. **Continuous-Time Markov Process**:
   - The state space can be discrete or continuous.
   - The process evolves continuously over time.
   - Transition probabilities are often described using a rate matrix (or generator matrix) instead of a transition matrix.

{:.note}
$\quad$ **Continuous-Time Markov Chain (CTMC)**
\\
$\qquad$ A CTMC is a specific type of Markov process where:
    \\
$\qquad \qquad$· The state space is discrete.
    \\
$\qquad \qquad$· Time is continuous.
    \\
$\qquad \qquad$· The transitions are governed by rates, often described using a rate matrix $ Q $.

#### Summary of Differences
{: .fs-3 .fw-700 .text-delta}

- **State Space**:
  - **Markov Chain**: Discrete state space.
  - **Markov Process**: Can be discrete or continuous state space.

- **Time**:
  - **Markov Chain**: Discrete time steps.
  - **Markov Process**: Can be discrete or continuous time.

- **Transition Mechanism**:
  - **Markov Chain**: Defined by a transition probability matrix.
  - **Markov Process**: Defined by transition probabilities for discrete time or transition rates for continuous time.


#### Markov Chain (Discrete-Time, Discrete State)
{: .fs-3 .fw-700}

Consider a simple weather model with three states: Sunny, Cloudy, and Rainy. The transitions are defined for each day (discrete time steps).

- States: $ S = \{ \text{Sunny}, \text{Cloudy}, \text{Rainy} \} $
- Transition Matrix $ P $:

  $$
  P = \begin{pmatrix}
      0.7 & 0.2 & 0.1 \\
      0.3 & 0.4 & 0.3 \\
      0.2 & 0.3 & 0.5
  \end{pmatrix}
  $$

#### Continuous-Time Markov Process (Continuous-Time, Discrete State)
{: .fs-3 .fw-700}

Consider a population model where individuals can be in different health states: Healthy, Sick, and Recovered. The transitions happen continuously over time, with certain rates.

- States: $ S = \{ \text{Healthy}, \text{Sick}, \text{Recovered} \} $
- Rate Matrix $ Q $:

  $$
  Q = \begin{pmatrix}
      -\lambda & \lambda & 0 \\
      0 & -\mu & \mu \\
      0 & 0 & 0
  \end{pmatrix}
  $$

where $\lambda$ is the rate of getting sick, and $\mu$ is the rate of recovery.

In summary, a Markov chain is a special case of a Markov process with discrete states and discrete time steps, whereas a Markov process can have a broader definition, encompassing both discrete and continuous states and time.
