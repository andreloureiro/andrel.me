(ns mozgas.example
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [reagent.core :as r]
            [goog.dom :as d]
            [mozgas.core :as m]
            [cljs.core.async :refer [<! timeout]]))


(enable-console-print!)

;; Toggle Box

(def transition-list
  ["fade"
   "flipX"
   "flipY"
   "flipBounceX"
   "flipBounceY"
   "swoop"
   "whirl"
   "shrink"
   "expand"
   "bounce"
   "bounceUp"
   "bounceDown"
   "bounceLeft"
   "bounceRight"
   "slideUp"
   "slideDown"
   "slideLeft"
   "slideRight"
   "slideUpBig"
   "slideDownBig"
   "slideLeftBig"
   "slideRightBig"
   "perspectiveUp"
   "perspectiveDown"
   "perspectiveLeft"
   "perspectiveRight"])


(defn toggle-box []
  (let [visible? (r/atom true)
        transition (r/atom "fade")
        duration (r/atom 1000)]
    (fn []
      [:div.toggle-box-container
       [:label "Transition"]
       [:select.toggle-transition
        {:on-change #(reset! transition
                             (.. % -target -value))}
        (for [t transition-list]
          ^{:key t}[:option {:value t} t])]
       [:label "Duration"]
       [:input.toggle-duration
        {:type "text"
         :value @duration
         :on-change #(reset! duration (.. % -target -value))}]
       [:div.toggle-box {:on-click #(reset! visible? (not @visible?))}
        [m/motion-component
         {:key @transition
          :duration @duration
          :stagger @duration
          :animation (if @visible?
                       (str "transition." @transition "In")
                       (str "transition." @transition "Out"))}
         [:div {:style {:width "100%"
                        :height "100%"
                        :background-color "indigo"}}]]]])))


;; Square List

(defn square [item]
  [:div.square-list__item
   {:key item}])

(def squares (r/atom []))

(defn render-square-list [transition]
  (fn []
    [:div {:style {:text-align "center"}}
     [:label "Transition"][:br]
     [:select.toggle-transition
      {:on-change #(reset! transition
                           (.. % -target -value))}
      (for [t transition-list]
        ^{:key t}[:option {:value t} t])]
     [m/motion-group
      {:class-name "square-list"
       :enter {:animation (str "transition." @transition "In")}
       :leave {:animation (str "transition." @transition "Out")}}
      (map square @squares)]]))

(defn on-mount-square-list []
  (go-loop []
    (<! (timeout (* 1000 (rand-int 3))))
    (swap! squares conj (rand-int 999))
    (recur)))

(defn square-list []
  (let [transition (r/atom "bounceUp")]
    (r/create-class
     {:component-did-mount on-mount-square-list
      :reagent-render (render-square-list transition)})))

;; Custom transition

(def heart-animation
  {:heart (m/register-effect
           {:defaultDuration 750
            :calls [[{:scale 0} 0.05]
                    [{:scale 0} 0.2]
                    [{:scale 1.2} 0.3 {:easing "ease-out"}]
                    [{:scale 1} 0.4]
                    ]})
   :explosion (m/register-effect
               {:defaultDuration 750
                :calls [[{:scale 0 :opacity 1} 0.1]
                        [{:scale 1} 0.2]
                        [{:opacity 0} 0.4]
                        ]})})


(defn custom-animation []
  (let [fav? (r/atom false)]
    (fn []
      [:div.custom-animation
       [m/motion-component
        {:animation (when @fav? (get heart-animation :explosion))
         :run-on-mount true}
        [:div.custom-animation__circle
         {:style {:position "absolute"}}
         ]]
       [m/motion-component
        {:animation (when @fav? (get heart-animation :heart))
         :run-on-mount true}
        [:div.custom-animation__heart
         {:class-name (if @fav?
                        "custom-animation__heart
                         custom-animation__heart--active"
                        "custom-animation__heart")
          :style {:position "absolute"}
          :on-click #(reset! fav? (not @fav?))}
         ]]])))



(def soccer-teams
  [{:name "Sao Paulo"
    :fg "white"
    :bg "red"}
   {:name "Santos"
    :fg "black"
    :bg "white"}
   {:name "Corinthians"
    :fg "white"
    :bg "black"}
   {:name "Palmeiras"
    :fg "white"
    :bg "forestgreen"}
   {:name "Internacional"
    :fg "white"
    :bg "red"}
   {:name "Gremio"
    :fg "white"
    :bg "dodgerblue"}
   {:name "Avai"
    :fg "royalblue"
    :bg "white"}
   {:name "Figueirense"
    :fg "white"
    :bg "black"}
   {:name "Atletico PR"
    :fg "red"
    :bg "black"}
   {:name "Coritiba"
    :fg "green"
    :bg "white"}
   {:name "Parana Clube"
    :fg "red"
    :bg "blue"}
   {:name "Botafogo"
    :fg "gray"
    :bg "black"}
   {:name "Flamengo"
    :fg "black"
    :bg "red"}
   {:name "Fluminense"
    :fg "green"
    :bg "red"}
   {:name "Vasco"
    :fg "black"
    :bg "white"}
   {:name "Atletico MG"
    :fg "white"
    :bg "black"}
   {:name "Cruzeiro"
    :fg "white"
    :bg "blue"}
   {:name "Bahia"
    :fg "blue"
    :bg "red"}
   {:name "Vitoria"
    :fg "red"
    :bg "black"}
   {:name "Ceara"
    :fg "white"
    :bg "black"}
   {:name "Santa Cruz"
    :fg "black"
    :bg "red"}
   {:name "Remo"
    :fg "white"
    :bg "midnightblue"}])

(def team-animation
  {:in (m/register-effect
        {:calls [[{:transform-perspective [800 800]
                   :transform-origin-x ["50%" "50%"]
                   :transform-origin-y ["100%" "100%"]
                   :margin-bottom 0
                   :opacity 1
                   :rotate-x [0 130]}
                  1
                  {:easing "ease-out"
                   :display "block"}]]})
   :out (m/register-effect
        {:calls [[{:transform-perspective [800 800]
                   :transform-origin-x ["50%" "50%"]
                   :transform-origin-y ["0%" "0%"]
                   :margin-bottom -30
                   :opacity 0
                   :rotate-x -70}
                  1
                  {:easing "ease-out"
                   :display "block"}]]})})

(defn team [team]
  [:li.list__item {:key (:id team)
                   :style {:background-color (:bg team)
                           :color (:fg team)}} (:name team)])

(defn add-item [teams item-count]
  (swap! item-count inc)
  (swap! teams #(into [] (cons (assoc (rand-nth soccer-teams) :id @item-count) %))))

(defn enter-animation [duration]
  {:animation (:in team-animation)
   :stagger duration
   :duration duration
   :backwards true
   :display "block"
   :style {:display "none"}})

(defn leave-animation [duration]
  {:animation (:out team-animation)
   :stagger duration
   :duration duration
   :backwards true})

(defn custom-transition []
  (let [teams (r/atom [])
        item-count (r/atom 0)
        duration 500]
    (fn []
      [:div.custom-transition
       [:button.btn {:on-click #(add-item teams item-count)} "add"]
       [:button.btn {:on-click #(dotimes [n 3] (add-item teams item-count))} "add 3"]
       [m/motion-group
        {:key "motion-gropu"
         :component "ul"
         :class-name "custom-transition__list"
         :enter (enter-animation duration)
         :leave (leave-animation duration)}
        (map team (take 5 @teams))]])))

(def nav-items
  [{:id 0
    :title "Toggle box"}
   {:id 1
    :title "Square list"}
   {:id 2
    :title "Custom animation"}
   {:id 3
    :title "Custom transition"}])

(defn make-nav-item [state]
  (fn [item]
    ))

(def views
  [{:id 0
    :view toggle-box}
   {:id 1
    :view square-list}
   {:id 2
    :view custom-animation}
   {:id 3
    :view custom-transition}])

(defn make-view [state]
  (fn [view]
    (if (= @state (:id view))
      ^{:key (:id view)}[(:view view)])))

(defn examples []
  (let [state (r/atom 0)]
    (fn []
      [:div.main
       [:h1.title "Mozgás Examples"]
       [:ul.nav
        (doall
         (for [item nav-items]
           [:li {:key (:id item)
                 :on-click #(reset! state (:id item))
                 :class-name (if (= @state (:id item))
                               "nav__item nav__item--active"
                               "nav__item")} (:title item)]))]
       [m/motion-group
        {:component "div"
         :class-name "content"
         :enter {:animation "transition.slideUpIn"
                 :delay 400
                 :duration 300}
         :leave {:animation "transition.slideUpOut"
                 :duration 300}}
        (doall
         (for [view views]
           (if (= @state (:id view))
             ^{:key (:id view)}[(:view view)])))]])))

(defn mount! []
  (println "-> Mozgas loaded")
  (r/render
   [examples]
   (d/getElement "app")))

(mount!)
